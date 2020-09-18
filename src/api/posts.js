const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// { id, title, body }
const posts = [
    {
        id: 1,
        title: '이시하라 사토미',
        body: '이시하라 사토미는 언제 결혼 할까?.'
    },
    {
        id: 2,
        title: '아라가키 유이',
        body: '아라가키 유이와 언제 결혼 할까?.'
    },
    {
        id: 3,
        title: '아야세 하루카',
        body: '아야세 하루카는 곧 결혼?'
    }    
];

export const getPosts = async () => {
    await sleep(100);
    return posts;
};

export const getPostById = async id => {
    await sleep(100);
    return posts.find(post => post.id === id);
};

