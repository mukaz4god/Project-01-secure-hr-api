variable "aws_region" {
  type = string
}

variable "project_name" {
  type = string
}

variable "environment" {
  type = string
}

variable "allowed_ssh_cidr" {
  type = string
}

variable "jwt_secret" {
  type      = string
  sensitive = true
}

variable "key_name" {
  type = string
}