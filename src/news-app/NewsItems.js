import React, {Component} from 'react';


class NewsItems extends Component{

    constructor(prop){
        super(prop)

        this.state = {
            articles: []
        }

        this.articles = [];
    }

    componentDidMount() {
        this.getTopHeadlines();
    }

    getTopHeadlines(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7850696fc755425d885a993b26a7d7e4')
            .then(res => {
               return res.json()
            })
            .then((res) => {
                console.log(res.articles)
                this.setState({articles: res.articles})
            })
    }


    render() {
        return <div className="container">
            {this.state.articles.map((article,index) => {
                return<div className="row mt-3" key={index}>
                    <div className="col-lg-4">
                        <img className='img-fluid' src={article.urlToImage}/>
                    </div>
                    <div className="col-lg-8">
                        <h5>{article.title}</h5>
                    </div>
                </div>
                })}
        </div>
    }



}

export default NewsItems