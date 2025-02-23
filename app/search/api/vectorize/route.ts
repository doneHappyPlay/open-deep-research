import axios from 'axios';


export async function POST(request: Request) {

    try {
        // 从火山引擎控制台获取的认证信息
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.ARK_API_KEY}` // 需要生成签名
            }
        };

        // 构造请求体（根据文档调整参数）
        const payload = {
            model: 'Doubao-embedding-vision',
            input: {
                "type": "image_url",
                "image_url": {
                    "url": "https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png"
                }
            } 
        };

        // 调用火山引擎API
        const response = await axios.post(
            'https://ark.cn-beijing.volces.com/api/v3/embeddings/multimodal',
            payload,
            config
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Vectorization failed:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            details: error.response?.data || error.message
        });
    }
}

