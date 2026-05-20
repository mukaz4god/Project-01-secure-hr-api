output "ecr_repository_url" {
  value = aws_ecr_repository.app.repository_url
}

output "ec2_public_ip" {
  value = aws_instance.app.public_ip
}

output "ssm_parameter_name" {
  value = aws_ssm_parameter.jwt_secret.name
}