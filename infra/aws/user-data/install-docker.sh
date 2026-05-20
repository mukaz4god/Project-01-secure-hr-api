#!/bin/bash
set -e

yum update -y
yum install -y docker

systemctl enable docker
systemctl start docker

usermod -aG docker ec2-user