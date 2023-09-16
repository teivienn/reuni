#!/bin/bash

read -p 'package name:' package_name

if [ -z "$package_name" ]
then 
  echo "package name is empty"
  exit
fi


SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
TS_TEMPLATE_DIR="$SCRIPT_DIR/ts-module-template"
PROJECT_DIR="$SCRIPT_DIR/../packages"

if [ -d $PROJECT_DIR/${package_name} ]
then
  echo "Package $package_name exists."
  exit
fi


cp -r $TS_TEMPLATE_DIR  $PROJECT_DIR/${package_name}

sed -i '' "s/ts-template/$package_name/g" $PROJECT_DIR/${package_name}/package.json
