
/*
 ------rules--------
1-   # , ## ,### , #### , ##### , ######  >> h1...h6
2-   ___ >> <hr> with border 2px
3-   **word** >>> <strong>word</strong>
4-   __word__ >>> <strong>word</strong>
5-   *word* >>> <i>word</i>
6-   _word_ >>> <i>word</i>

7-   * item1 >>>  <ul><li>item1</li></ul>
8-     * item1 >>>  <ul><li>item1</li></ul>
9-   * item1 >>>  <ul><li>item1</li></ul>
10-  1. item1 >>>  <ol><li>item1</li></ol>
11-     1. item1 >>>  <ol><li>item1</li></ol>

12-  ![alt text](url "tooltip") >>> <img src="url"  alt="alt text">
13-  ![alt text](url) >>> <img src="url"  alt="alt text">

14-  [google](url "tooltip") >>> <a href="url">google</a>
15-  [google](url) >>> <a href="url">google</a>

16-  >text >>> <div with border left 2px bg-gray-200><blockquote margin left ml-2text</blockquote></div> 
17-  >text1 
     >
     >>text2    >>> nasted blockquotes 



18- ## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |    

>> <table>
      <thead>
         <tr><hr></hr></tr>        
      </thead>
      <tbody>
         <tr><td></td></tr>
      </tbody>
   </table>



19-  ## Blocks of code
    ```
    let message = 'Hello world';
    alert(message);
    ```

   >>>>  <div bg-gray p-1><pre></pre></div>


20-  ## Inline code
     This web site is using `markedjs/marked`.  <div bg-gray px-1>text</div>

21-  ~~word~~ >>> <del>word</del>   
22-  ~down~   >>> <sub>down</sub> 
23-  ^up^     >>> <sup>up</sup>
*/
export function factory(input){
  let output = ""
  
  //h tag
  if((/^[#]+/gi).test(input)){
    let hashCount = input.match((/^[#]+/gi)).length
    let text = input.match(/[^#]/gi).join('')
    switch (hashCount) {
        case 1:
            return <h1>{text}</h1>
            break;
        case 2:
            return <h2>{text}</h2>
            break;
        case 3:
            return <h3>{text}</h3>
            break;
        case 4:
            return <h4>{text}</h4>
            break;
        case 5:
            return <h5>{text}</h5>
            break;
        case 6:
            return <h6>{text}</h6>
            break;
        default:
            break;
    }
  }

  //hr tag
  if(input=="___"){
    return <hr></hr>
  }

  //strong tag
  // if((/\*\*[a-zA-Z0-9\D\W_]+\*\*/gi).test(input)){    
  //   let word = input.match(/\*\*[a-zA-Z0-9\D\W_]+\*\*/gi)
  //   //let text = input.match(/[^#]/gi).join("")    
  // }

  //~~word~~
  if((/~~.+~~/gi).test(input)){
    let words = del.match(/(?<=~~).+(?=~~)/gi)

  }

  //~down~ 
  if((/~.+~/gi).test(input)){
    let words = del.match(/(?<=~).+(?=~)/gi)

  }
  //^up^
  if((/\^.+\^/gi).test(input)){
    let words = del.match(/(?<=\^).+(?=\^)/gi)

  }
  //Inline code
  if((/`.+`/gi).test(input)){
    let words = del.match(/(?<=`).+(?=`)/gi)

  }

  //Blocks of code
   if(input=="```"){

   }

  //links
  if((/\[[^\s]+\]\([^\s]+\)+/gi).test(input)){
    let links = input.match(/\[[^\s]+\]\([^\s]+\)+/gi)
    for (let i = 0; i < links.length; i++) {

      let link = links[i].match(/(?<=\[).+(?=\])/gi)
      let url = links[i].match(/(?<=\()).+(?=\))/gi)
      
    }
    
  }

  //imgs
  if((/!\[[^\s]+\]\([^\s]+\)+/gi).test(input)){
    let imgs = input.match(/\[[^\s]+\]\([^\s]+\)+/gi)
    for (let i = 0; i < imgs.length; i++) {

      let alt = links[i].match(/(?<=\[).+(?=\])/gi)
      let src = links[i].match(/(?<=\()).+(?=\))/gi)
      
    }
    
  }

  //table
  





  //list 
  //unordered
  if((/^\*\s/gi).test(input)){
   let item = input.match(/(?<=\*\s).+/gi)
   return <ul><li>{item}</li></ul>
  }
  //ordered
   if((/^[0-9]\.\s/gi).test(input)){
    let item = input.match(/(?<=[0-9]\.\s).+/gi)
    return <ol><li>{item}</li></ol>
  }



}

