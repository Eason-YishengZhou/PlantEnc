import openai



openai.api_key = "keys"

def get_response(question):
    response = ""
    # response = openai.ChatCompletion.create(
    #   model="gpt-3.5-turbo",
    #   messages=[
    #       {"role": "system", "content": "你是一个植物知识专家"},
    #       {"role": "user", "content": question}
    #   ]
    # )
    # answer = response['choices'][0]['message']['content']
    return response