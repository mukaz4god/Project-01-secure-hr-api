const request = require("supertest");
const app = require("../src/server");

describe("Employee access control", () => {
  test("health endpoint returns ok", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  test("employee can access own record through /me", async () => {
    const response = await request(app)
      .get("/api/me")
      .set("x-user-id", "1")
      .set("x-user-role", "employee");

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });

  test("employee cannot access another employee record", async () => {
    const response = await request(app)
      .get("/api/employees/2")
      .set("x-user-id", "1")
      .set("x-user-role", "employee");

    expect(response.statusCode).toBe(403);
  });

  test("manager can access managed employee record", async () => {
    const response = await request(app)
      .get("/api/employees/2")
      .set("x-user-id", "3")
      .set("x-user-role", "manager");

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(2);
  });

  test("HR can access any employee record", async () => {
    const response = await request(app)
      .get("/api/employees/2")
      .set("x-user-id", "1")
      .set("x-user-role", "hr");

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(2);
  });
});