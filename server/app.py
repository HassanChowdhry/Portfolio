#!/usr/bin/env python3
import os

import aws_cdk as cdk

from server.server_stack import ServerStack


app = cdk.App()
ServerStack(app, "ServerStack")
app.synth()
