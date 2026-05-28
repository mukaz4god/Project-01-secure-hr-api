# #!/bin/bash
# set -e

# yum update -y

# yum install -y docker amazon-cloudwatch-agent awscli

# systemctl enable docker
# systemctl start docker

# usermod -aG docker ec2-user

#!/bin/bash
set -e

yum update -y

yum install -y \
  docker \
  amazon-cloudwatch-agent \
  amazon-ssm-agent \
  awscli

systemctl enable docker
systemctl start docker

systemctl enable amazon-ssm-agent
systemctl start amazon-ssm-agent

usermod -aG docker ec2-user