const ul =document.querySelector('#ul')
const loading=document.querySelector('.load')


fetch("https://fakestoreapi.com/products")   
    .then(api=>api.json())
    .then(date=>{  
        date.forEach(product=>{
            const li =document.createElement('li')
            const img1 =document.createElement('img')
            const img2 =document.createElement('img')
            const price = document.createElement('p')
            const Discount = document.createElement('p')
            const Desc = document.createElement('p')


            price.innerHTML= 'title: ' + product.title
            Discount.innerHTML= 'discount: ' + product.price
            Desc.innerHTML= 'description: ' +product.description
            img1.src = product.image
            img2.src = './img/Vector (11).svg'

            li.style.marginLeft='20px'
            img1.style.width = '180px'
            img1.style.height ='180px'
            price.style.margin='10px 10px'
            Discount.style.margin='10px 10px'
            Desc.style.margin='10px 10px'
            price.style.width='100px'
            Desc.style.width='100px'
            li.style.backgroundColor='grey'
            li.style.padding='10px'
            li.style.marginTop='20px'
            img2.style.marginLeft='150px'

            li.appendChild(img1)
            li.appendChild(price)
            li.appendChild(Discount)
            li.appendChild(Desc)
            li.appendChild(img2)
            ul.appendChild(li)
            
        })
    })