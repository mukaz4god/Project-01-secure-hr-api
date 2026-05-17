process.env.JWT_SECRET = "test-secret-change-me-32-characters";

const request = require("supertest");
const app = require("../src/server");

async function login(username, password = "Password123!") {
  const response = await request(app)
    .post("/api/login")
    .send({ username, password });

  return response.body.accessToken;
}

describe("Employee access control with JWT authentication", () => {
  test("health endpoint returns ok", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  test("login returns JWT access token", async () => {
    const token = await login("alice");

    expect(token).toBeDefined();
  });

  test("employee can access own record through /me", async () => {
    const token = await login("alice");

    const response = await request(app)
      .get("/api/me")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });

  test("employee cannot access another employee record", async () => {
    const token = await login("alice");

    const response = await request(app)
      .get("/api/employees/2")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(403);
  });

  test("manager can access managed employee record", async () => {
    const token = await login("caroline");

    const response = await request(app)
      .get("/api/employees/2")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(2);
  });

  test("HR can access any employee record", async () => {
    const token = await login("harriet");

    const response = await request(app)
      .get("/api/employees/2")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(2);
  });

  test("old fake header authentication no longer works", async () => {
    const response = await request(app)
      .get("/api/me")
      .set("x-user-id", "1")
      .set("x-user-role", "employee");

    expect(response.statusCode).toBe(401);
  });
});

test("login endpoint rate limits repeated failed attempts", async () => {
  for (let i = 0; i < 6; i++) {
    await request(app)
      .post("/api/login")
      .send({
        username: "alice",
        password: "wrong-password"
      });
  }

  const response = await request(app)
    .post("/api/login")
    .send({
      username: "alice",
      password: "wrong-password"
    });

  expect(response.statusCode).toBe(429);
});