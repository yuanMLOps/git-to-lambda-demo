import os
import boto3
import mimetypes
from botocore.config import Config

# This is to demo using customer component from python instead of using javascript
# the code was collected from internet and may need further optimization. This
# is just for demo purpose to experiment how dockers can be used to create customerized actions
# github actions make input variables defined in action.yml
# available to Python files in container by adding prefix of INPUT_ and
# then concatenate the input variable name. All letters are upper case

def run(): 
    bucket = os.environ['INPUT_BUCKET']
    bucket_region = os.environ['INPUT_BUCKET-REGION']
    dist_folder = os.environ['INPUT_DIST-FOLDER']

    configuration = Config(region_name=bucket_region)

    s3_client = boto3.client('s3', config=configuration)

    for root, subdirs, files in os.walk(dist_folder):
        for file in files:
            s3_client.upload_file(
                os.path.join(root, file),
                bucket,
                os.path.join(root, file).replace(dist_folder + '/', ''),
                ExtraArgs={"ContentType": mimetypes.guess_type(file)[0]}
            )

    website_url = f'http://{bucket}.s3-website-{bucket_region}.amazonaws.com'
    with open(os.environ['GITHUB_OUTPUT'], 'a') as gh_output:
        print(f'website-url={website_url}', file=gh_output)


if __name__ == '__main__':
    run()
