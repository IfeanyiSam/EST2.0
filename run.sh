#!/bin/bash

cd node-app
terraform init
terraform apply --auto-approve
ELB_EP=$(terraform output --raw alb_dns_name)

cd ../angular-app22
pwd
echo $ELB_EP
terraform init
TF_VAR_alb_dns_name=$ELB_EP terraform apply --auto-approve

