# Why do we use OIDC Federation and SSM

We used OIDC and SSM because they eliminate two common security risks:
Long-lived cloud credentials
Public SSH access

## Why OIDC Federation?

Traditional approach (less secure)


GitHub Actions stores:
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

inside GitHub Secrets.

Flow:
```
GitHub Actions
    │
Stored AWS Keys
    │
AWS
```

Problems:

Keys can leak
Keys can be stolen
Keys must be rotated
Keys may be over-permissioned

This is exactly the type of finding AppSec and Cloud Security teams regularly discover.

## My approach (OIDC)

Flow:

```
GitHub Actions
     │
Temporary Identity Token
     │
AWS IAM Role
     │
Temporary Credentials

Benefits:
```

### No AWS keys stored in GitHub

We removed:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

completely.

### Short-lived credentials

AWS issues credentials that expire automatically.

Even if stolen:

Limited lifetime

instead of:
```
Valid for months or years
```

### Least privilege

The IAM role only receives the permissions we explicitly granted.

Example:

```
ECR push
SSM deployment
Parameter Store access
```

Nothing more.

## Why SSM?

### Traditional deployment

We initially used:
```
GitHub Actions
     │
SSH Key
     │
SSH Port 22
     │
EC2
```

Problems:

### Private key management

We had:
```
EC2_SSH_KEY
```

inside GitHub Secrets. That key becomes a sensitive asset.

### Public SSH exposure

We temporarily opened:
```
22/tcp
```

to allow deployments. This increases attack surface.

### Operational burden

You must:

- protect keys
- rotate keys
- manage access

## Final approach

```
Flow:

GitHub Actions
     │
OIDC
     │
IAM Role
     │
SSM Run Command
     │
EC2
```

Benefits:

### No SSH key

We deleted:
```
EC2_SSH_KEY
```

### No inbound SSH required

We no longer need:
```
22/tcp
```

for deployment. A huge security improvement.

### Better auditability

AWS records SSM activity. Security teams should be happy with this because they can see:
```
who
when
what command
which instance
```
### Why this matters for YOUR target roles

For:

- Application Security Engineer
- DevSecOps Engineer
- Cloud Security Engineer
- Platform Security Engineer

A strong answer is:

"I replaced static AWS credentials with GitHub OIDC federation and replaced SSH-based deployments with AWS Systems Manager Run Command. This reduced secret management risk, eliminated deployment SSH keys, reduced the network attack surface, and aligned the deployment process with least-privilege principles."



## The deeper lesson was:

How do we securely automate deployments while reducing trust, secrets, and attack surface?

OIDC and SSM were the two biggest examples of that principle.
