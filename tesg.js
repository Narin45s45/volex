document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById('userInput');
    const responseDiv = document.getElementById('response');
    
    // ���� ����� ����
    async function sendMessage() {
        const inputText = userInput.value;
        if (!inputText) {
            responseDiv.innerHTML = "����� ���� ��� �� ���� ����.";
            return;
        }

        // ���� API � ������� �� OpenAI
        const apiKey = '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';  // ���� API ���
        const endpoint = 'https://api.openai.com/v1/chat/completions'; 
        const data = {
            model: "gpt-4o-mini", 
            messages: [{ role: "user", content: inputText }]
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        };

        try {
            const res = await fetch(endpoint, options);
            const result = await res.json();
            const botResponse = result.choices[0].message.content.trim();
            responseDiv.innerHTML = botResponse;
        } catch (error) {
            responseDiv.innerHTML = "��� �� ����� �������. ����� ������ ���� ����.";
        }
    }

    // ����� ���� event listener �� Ϙ�� �����
    document.getElementById('sendButton').addEventListener('click', sendMessage);
});
