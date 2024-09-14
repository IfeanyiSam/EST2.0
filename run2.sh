#!/bin/bash

cd angular-app22

terraform destroy --auto-approve

cd ../node-app
terraform destroy --auto-approve



