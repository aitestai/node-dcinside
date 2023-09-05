# Node Dcinside

# Example

## 글쓰기

```js
const dc = require('node-dcinside');

const client = new dc.DcinsideApi('ㅇㅇ', 1234);

(async function () {
    const res = await client.requestArticle('baseball_new11', '제목ㅁ', '냉ㅁㄹ용')

    console.log(res)
})()
```

## 글쓰기(이미지)

```js
const res = await client.requestArticle('baseball_new11', '애옹', '고양이', {
    image: './cat.png'
})

console.log(res)
```
> 이미지여러개일경우 ['./cat.png', './dog.jpg'] 형식으로

# License

[GPL-3.0](https://github.com/aitestai/node-dcinside/blob/main/LICENSE)
