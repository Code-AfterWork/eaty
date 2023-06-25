provider "aws" {
  region = "your_aws_region"
}

resource "aws_instance" "example_instance" {
  ami           = "your_ami_id"
  instance_type = "your_instance_type"
  key_name      = "your_key_pair_name"

  tags = {
    Name = "example-instance"
  }

  user_data = <<-EOF
    #!/bin/bash
    sudo apt-get update
    sudo apt-get install -y docker.io

    # Pull and run the Django backend container
    sudo docker run -d -p 8000:8000 --name django-app your_django_image_name

    # Pull and run the React frontend container
    sudo docker run -d -p 80:80 --name react-app your_react_image_name
    EOF
}
