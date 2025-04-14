# backend/Dockerfile
FROM python:3.12.9-slim

# 作業ディレクトリを設定
WORKDIR /workspace/backend/src

COPY ../requirements.txt /workspace/backend/requirements.txt
RUN pip install --no-cache-dir -r /workspace/backend/requirements.txt
COPY src/ .


RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9


CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]

