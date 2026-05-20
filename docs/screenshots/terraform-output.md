terraform apply
data.aws_ami.amazon_linux: Reading...
data.aws_ami.amazon_linux: Read complete after 2s [id=ami-02fe376e6ac9632c8]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_ecr_repository.app will be created
  + resource "aws_ecr_repository" "app" {
      + arn                  = (known after apply)
      + id                   = (known after apply)
      + image_tag_mutability = "MUTABLE"
      + name                 = "secure-hr-api-dev"
      + registry_id          = (known after apply)
      + repository_url       = (known after apply)
      + tags_all             = (known after apply)

      + image_scanning_configuration {
          + scan_on_push = true
        }
    }

  # aws_iam_instance_profile.ec2_profile will be created
  + resource "aws_iam_instance_profile" "ec2_profile" {
      + arn         = (known after apply)
      + create_date = (known after apply)
      + id          = (known after apply)
      + name        = "secure-hr-api-dev-instance-profile"
      + name_prefix = (known after apply)
      + path        = "/"
      + role        = "secure-hr-api-dev-ec2-role"
      + tags_all    = (known after apply)
      + unique_id   = (known after apply)
    }

  # aws_iam_policy.ec2_policy will be created
  + resource "aws_iam_policy" "ec2_policy" {
      + arn              = (known after apply)
      + attachment_count = (known after apply)
      + id               = (known after apply)
      + name             = "secure-hr-api-dev-ec2-policy"
      + name_prefix      = (known after apply)
      + path             = "/"
      + policy           = (known after apply)
      + policy_id        = (known after apply)
      + tags_all         = (known after apply)
    }

  # aws_iam_role.ec2_role will be created
  + resource "aws_iam_role" "ec2_role" {
      + arn                   = (known after apply)
      + assume_role_policy    = jsonencode(
            {
              + Statement = [
                  + {
                      + Action    = "sts:AssumeRole"
                      + Effect    = "Allow"
                      + Principal = {
                          + Service = "ec2.amazonaws.com"
                        }
                    },
                ]
              + Version   = "2012-10-17"
            }
        )
      + create_date           = (known after apply)
      + force_detach_policies = false
      + id                    = (known after apply)
      + managed_policy_arns   = (known after apply)
      + max_session_duration  = 3600
      + name                  = "secure-hr-api-dev-ec2-role"
      + name_prefix           = (known after apply)
      + path                  = "/"
      + tags_all              = (known after apply)
      + unique_id             = (known after apply)

      + inline_policy (known after apply)
    }

  # aws_iam_role_policy_attachment.ec2_attach will be created
  + resource "aws_iam_role_policy_attachment" "ec2_attach" {
      + id         = (known after apply)
      + policy_arn = (known after apply)
      + role       = "secure-hr-api-dev-ec2-role"
    }

  # aws_instance.app will be created
  + resource "aws_instance" "app" {
      + ami                                  = "ami-02fe376e6ac9632c8"
      + arn                                  = (known after apply)
      + associate_public_ip_address          = (known after apply)
      + availability_zone                    = (known after apply)
      + cpu_core_count                       = (known after apply)
      + cpu_threads_per_core                 = (known after apply)
      + disable_api_stop                     = (known after apply)
      + disable_api_termination              = (known after apply)
      + ebs_optimized                        = (known after apply)
      + enable_primary_ipv6                  = (known after apply)
      + get_password_data                    = false
      + host_id                              = (known after apply)
      + host_resource_group_arn              = (known after apply)
      + iam_instance_profile                 = "secure-hr-api-dev-instance-profile"
      + id                                   = (known after apply)
      + instance_initiated_shutdown_behavior = (known after apply)
      + instance_lifecycle                   = (known after apply)
      + instance_state                       = (known after apply)
      + instance_type                        = "t2.micro"
      + ipv6_address_count                   = (known after apply)
      + ipv6_addresses                       = (known after apply)
      + key_name                             = (known after apply)
      + monitoring                           = (known after apply)
      + outpost_arn                          = (known after apply)
      + password_data                        = (known after apply)
      + placement_group                      = (known after apply)
      + placement_partition_number           = (known after apply)
      + primary_network_interface_id         = (known after apply)
      + private_dns                          = (known after apply)
      + private_ip                           = (known after apply)
      + public_dns                           = (known after apply)
      + public_ip                            = (known after apply)
      + secondary_private_ips                = (known after apply)
      + security_groups                      = (known after apply)
      + source_dest_check                    = true
      + spot_instance_request_id             = (known after apply)
      + subnet_id                            = (known after apply)
      + tags                                 = {
          + "Environment" = "dev"
          + "ManagedBy"   = "Terraform"
          + "Name"        = "secure-hr-api-dev-ec2"
          + "Project"     = "secure-hr-api"
        }
      + tags_all                             = {
          + "Environment" = "dev"
          + "ManagedBy"   = "Terraform"
          + "Name"        = "secure-hr-api-dev-ec2"
          + "Project"     = "secure-hr-api"
        }
      + tenancy                              = (known after apply)
      + user_data                            = "1d500f4063c6e927dfda84f4a64afd57725034b6"
      + user_data_base64                     = (known after apply)
      + user_data_replace_on_change          = false
      + vpc_security_group_ids               = (known after apply)

      + capacity_reservation_specification (known after apply)

      + cpu_options (known after apply)

      + ebs_block_device (known after apply)

      + enclave_options (known after apply)

      + ephemeral_block_device (known after apply)

      + instance_market_options (known after apply)

      + maintenance_options (known after apply)

      + metadata_options (known after apply)

      + network_interface (known after apply)

      + private_dns_name_options (known after apply)

      + root_block_device (known after apply)
    }

  # aws_security_group.app_sg will be created
  + resource "aws_security_group" "app_sg" {
      + arn                    = (known after apply)
      + description            = "Security group for HR API EC2 instance"
      + egress                 = [
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = "Allow outbound internet access"
              + from_port        = 0
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "-1"
              + security_groups  = []
              + self             = false
              + to_port          = 0
            },
        ]
      + id                     = (known after apply)
      + ingress                = [
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = "HTTP access to API"
              + from_port        = 3000
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "tcp"
              + security_groups  = []
              + self             = false
              + to_port          = 3000
            },
          + {
              + cidr_blocks      = [
                  + "176.27.180.62/32",
                ]
              + description      = "Restricted SSH access"
              + from_port        = 22
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "tcp"
              + security_groups  = []
              + self             = false
              + to_port          = 22
            },
        ]
      + name                   = "secure-hr-api-dev-sg"
      + name_prefix            = (known after apply)
      + owner_id               = (known after apply)
      + revoke_rules_on_delete = false
      + tags_all               = (known after apply)
      + vpc_id                 = (known after apply)
    }

  # aws_ssm_parameter.jwt_secret will be created
  + resource "aws_ssm_parameter" "jwt_secret" {
      + arn            = (known after apply)
      + data_type      = (known after apply)
      + has_value_wo   = (known after apply)
      + id             = (known after apply)
      + insecure_value = (known after apply)
      + key_id         = (known after apply)
      + name           = "/secure-hr-api/dev/JWT_SECRET"
      + tags_all       = (known after apply)
      + tier           = (known after apply)
      + type           = "SecureString"
      + value          = (sensitive value)
      + value_wo       = (write-only attribute)
      + version        = (known after apply)
    }

Plan: 8 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + ec2_public_ip      = (known after apply)
  + ecr_repository_url = (known after apply)
  + ssm_parameter_name = "/secure-hr-api/dev/JWT_SECRET"

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_ecr_repository.app: Creating...
aws_ssm_parameter.jwt_secret: Creating...
aws_iam_role.ec2_role: Creating...
aws_security_group.app_sg: Creating...
aws_iam_role.ec2_role: Creation complete after 1s [id=secure-hr-api-dev-ec2-role]
aws_iam_instance_profile.ec2_profile: Creating...
aws_ecr_repository.app: Creation complete after 1s [id=secure-hr-api-dev]
aws_ssm_parameter.jwt_secret: Creation complete after 1s [id=/secure-hr-api/dev/JWT_SECRET]
aws_iam_policy.ec2_policy: Creating...
aws_iam_policy.ec2_policy: Creation complete after 0s [id=arn:aws:iam::865366202762:policy/secure-hr-api-dev-ec2-policy]
aws_iam_role_policy_attachment.ec2_attach: Creating...
aws_iam_role_policy_attachment.ec2_attach: Creation complete after 1s [id=secure-hr-api-dev-ec2-role-20260520045800635000000001]
aws_security_group.app_sg: Creation complete after 4s [id=sg-098533fa5347d1c1b]
aws_iam_instance_profile.ec2_profile: Creation complete after 6s [id=secure-hr-api-dev-instance-profile]
aws_instance.app: Creating...
aws_instance.app: Still creating... [00m10s elapsed]
aws_instance.app: Still creating... [00m20s elapsed]
aws_instance.app: Creation complete after 25s [id=i-006c93421ba60de45]

Apply complete! Resources: 8 added, 0 changed, 0 destroyed.

Outputs:

ec2_public_ip = "18.209.23.76"
ecr_repository_url = "865366202762.dkr.ecr.us-east-1.amazonaws.com/secure-hr-api-dev"
ssm_parameter_name = "/secure-hr-api/dev/JWT_SECRET"

------------------------------
terraform apply
data.aws_ami.amazon_linux: Reading...
aws_ssm_parameter.jwt_secret: Refreshing state... [id=/secure-hr-api/dev/JWT_SECRET]
aws_iam_role.ec2_role: Refreshing state... [id=secure-hr-api-dev-ec2-role]
aws_ecr_repository.app: Refreshing state... [id=secure-hr-api-dev]
aws_security_group.app_sg: Refreshing state... [id=sg-098533fa5347d1c1b]
aws_iam_instance_profile.ec2_profile: Refreshing state... [id=secure-hr-api-dev-instance-profile]
aws_iam_policy.ec2_policy: Refreshing state... [id=arn:aws:iam::865366202762:policy/secure-hr-api-dev-ec2-policy]
aws_iam_role_policy_attachment.ec2_attach: Refreshing state... [id=secure-hr-api-dev-ec2-role-20260520045800635000000001]
data.aws_ami.amazon_linux: Read complete after 2s [id=ami-02fe376e6ac9632c8]
aws_instance.app: Refreshing state... [id=i-006c93421ba60de45]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
-/+ destroy and then create replacement

Terraform will perform the following actions:

  # aws_instance.app must be replaced
-/+ resource "aws_instance" "app" {
      ~ arn                                  = "arn:aws:ec2:us-east-1:865366202762:instance/i-006c93421ba60de45" -> (known after apply)
      ~ associate_public_ip_address          = true -> (known after apply)
      ~ availability_zone                    = "us-east-1c" -> (known after apply)
      ~ cpu_core_count                       = 1 -> (known after apply)
      ~ cpu_threads_per_core                 = 1 -> (known after apply)
      ~ disable_api_stop                     = false -> (known after apply)
      ~ disable_api_termination              = false -> (known after apply)
      ~ ebs_optimized                        = false -> (known after apply)
      + enable_primary_ipv6                  = (known after apply)
      - hibernation                          = false -> null
      + host_id                              = (known after apply)
      + host_resource_group_arn              = (known after apply)
      ~ id                                   = "i-006c93421ba60de45" -> (known after apply)
      ~ instance_initiated_shutdown_behavior = "stop" -> (known after apply)
      + instance_lifecycle                   = (known after apply)
      ~ instance_state                       = "running" -> (known after apply)
      ~ ipv6_address_count                   = 0 -> (known after apply)
      ~ ipv6_addresses                       = [] -> (known after apply)
      + key_name                             = "kfj2-key" # forces replacement
      ~ monitoring                           = false -> (known after apply)
      + outpost_arn                          = (known after apply)
      + password_data                        = (known after apply)
      + placement_group                      = (known after apply)
      ~ placement_partition_number           = 0 -> (known after apply)
      ~ primary_network_interface_id         = "eni-0851409bfdf0de245" -> (known after apply)
      ~ private_dns                          = "ip-172-31-23-153.ec2.internal" -> (known after apply)
      ~ private_ip                           = "172.31.23.153" -> (known after apply)
      ~ public_dns                           = "ec2-18-209-23-76.compute-1.amazonaws.com" -> (known after apply)
      ~ public_ip                            = "18.209.23.76" -> (known after apply)
      ~ secondary_private_ips                = [] -> (known after apply)
      ~ security_groups                      = [
          - "secure-hr-api-dev-sg",
        ] -> (known after apply)
      + spot_instance_request_id             = (known after apply)
      ~ subnet_id                            = "subnet-0da51788c5cdc1794" -> (known after apply)
        tags                                 = {
            "Environment" = "dev"
            "ManagedBy"   = "Terraform"
            "Name"        = "secure-hr-api-dev-ec2"
            "Project"     = "secure-hr-api"
        }
      ~ tenancy                              = "default" -> (known after apply)
      + user_data_base64                     = (known after apply)
        # (9 unchanged attributes hidden)

      ~ capacity_reservation_specification (known after apply)
      - capacity_reservation_specification {
          - capacity_reservation_preference = "open" -> null
        }

      ~ cpu_options (known after apply)
      - cpu_options {
          - core_count       = 1 -> null
          - threads_per_core = 1 -> null
            # (1 unchanged attribute hidden)
        }

      - credit_specification {
          - cpu_credits = "standard" -> null
        }

      ~ ebs_block_device (known after apply)

      ~ enclave_options (known after apply)
      - enclave_options {
          - enabled = false -> null
        }

      ~ ephemeral_block_device (known after apply)

      ~ instance_market_options (known after apply)

      ~ maintenance_options (known after apply)
      - maintenance_options {
          - auto_recovery = "default" -> null
        }

      ~ metadata_options (known after apply)
      - metadata_options {
          - http_endpoint               = "enabled" -> null
          - http_protocol_ipv6          = "disabled" -> null
          - http_put_response_hop_limit = 2 -> null
          - http_tokens                 = "required" -> null
          - instance_metadata_tags      = "disabled" -> null
        }

      ~ network_interface (known after apply)

      ~ private_dns_name_options (known after apply)
      - private_dns_name_options {
          - enable_resource_name_dns_a_record    = false -> null
          - enable_resource_name_dns_aaaa_record = false -> null
          - hostname_type                        = "ip-name" -> null
        }

      ~ root_block_device (known after apply)
      - root_block_device {
          - delete_on_termination = true -> null
          - device_name           = "/dev/xvda" -> null
          - encrypted             = false -> null
          - iops                  = 3000 -> null
          - tags                  = {} -> null
          - tags_all              = {} -> null
          - throughput            = 125 -> null
          - volume_id             = "vol-06983d8c8df6c89a2" -> null
          - volume_size           = 2 -> null
          - volume_type           = "gp3" -> null
            # (1 unchanged attribute hidden)
        }
    }

Plan: 1 to add, 0 to change, 1 to destroy.

Changes to Outputs:
  ~ ec2_public_ip      = "18.209.23.76" -> (known after apply)

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_instance.app: Destroying... [id=i-006c93421ba60de45]
aws_instance.app: Still destroying... [id=i-006c93421ba60de45, 00m10s elapsed]
aws_instance.app: Still destroying... [id=i-006c93421ba60de45, 00m20s elapsed]
aws_instance.app: Still destroying... [id=i-006c93421ba60de45, 00m30s elapsed]
aws_instance.app: Destruction complete after 31s
aws_instance.app: Creating...
aws_instance.app: Still creating... [00m10s elapsed]
aws_instance.app: Still creating... [00m20s elapsed]
aws_instance.app: Still creating... [00m30s elapsed]
aws_instance.app: Creation complete after 33s [id=i-0f8c16c44f8ad43e9]

Apply complete! Resources: 1 added, 0 changed, 1 destroyed.

Outputs:

ec2_public_ip = "54.209.248.188"
ecr_repository_url = "865366202762.dkr.ecr.us-east-1.amazonaws.com/secure-hr-api-dev"
ssm_parameter_name = "/secure-hr-api/dev/JWT_SECRET"
