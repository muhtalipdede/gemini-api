# Gemini NodeJS Express API

This is a simple NodeJS Express API that serves a single endpoint that returns a JSON object with a message. This API is intended to be used as a backend for a frontend application.

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

## Usage

The API serves a single endpoint at `/api/content/generate`. This endpoint accepts a POST request with a JSON object that contains a `text` key. The value of the `text` key is used to generate a message that is returned in the response.

```shell
curl -X POST -H "Content-Type: application/json" -d '{"text":"Merhaba"}' http://localhost:3000/api/content/generate
```

The response will be a JSON object with a `message` key that contains the generated message.

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Merhaba! Nasılsın?  Ne hakkında konuşmak istersin? \n"
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP",
      "index": 0,
      "safetyRatings": [
        {
          "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          "probability": "NEGLIGIBLE"
        },
        {
          "category": "HARM_CATEGORY_HATE_SPEECH",
          "probability": "NEGLIGIBLE"
        },
        {
          "category": "HARM_CATEGORY_HARASSMENT",
          "probability": "NEGLIGIBLE"
        },
        {
          "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
          "probability": "NEGLIGIBLE"
        }
      ]
    }
  ],
  "usageMetadata": {
    "promptTokenCount": 1,
    "candidatesTokenCount": 17,
    "totalTokenCount": 18
  }
}
```



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.