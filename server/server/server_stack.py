from aws_cdk import (
    Stack,
    aws_lambda as awslambda,
    aws_lambda_python_alpha as python_lambda,
    aws_apigateway as apigateway,
)
import os
from os import path
from dotenv import load_dotenv
load_dotenv()

from constructs import Construct

class ServerStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        env_keys = {
            "OPENAI_API_KEY":os.getenv("OPENAI_API_KEY"),
            "OPENAI_ASSISTANT_ID":os.getenv("OPENAI_ASSISTANT_ID"),
        }
        
        lambda_function = python_lambda.PythonFunction(
            self, 
            "Function",
            entry=path.join(path.dirname(__file__), "../lambda"),
            runtime=awslambda.Runtime.PYTHON_3_12, 
            index="main.py",
            environment=env_keys,
        )
        
        api = apigateway.LambdaRestApi(
            self,
            "fast-api",
            handler=lambda_function,
        )