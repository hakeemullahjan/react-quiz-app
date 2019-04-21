import React, { Component } from 'react';

export default class Quiz extends Component {
    constructor() {
        super()
        this.state = {
            quesResult: [],
            queCount: 0,
            userAns: ''


        }
        this.nextQues = this.nextQues.bind(this)
        this.setResult = this.setResult.bind(this)
    }

    nextQues(event) {
        // console.log('nexxtQUES')
        // console.log('ans:',event.target.value)
        // console.log('dalta last ans', this.state.userAns)
        console.log('checked before next=====>',this.state.userAns)
        if(this.state.userAns === this.props.quizes.correct_answer){
            // alert('correct answer')
            this.setState({queCount:this.state.queCount+1})
        }
        this.props.countINC()
    }

    setResult(e) {

        // console.log(e.target.value)
        // console.log('hi')
        // console.log('checked =====>',e.target.value)
        // console.log('checking radio btn:',e.target.checked)
        this.setState({ userAns: e.target.value })
        


        // if (e.target.value === this.props.quizes.correct_answer) {
        //     this.setState({ queCount: this.state.queCount + 1 })
        //     console.log('correct ans',e.target.value)
        // }
        // else {
        //     console.log('incoreect ans',e.target.value)
        // }

    }
    componentWillUnmount(props, state) {
        console.log('correct answers', this.state)
        console.log(this.state.queCount)

        this.props.showResult(this.state.queCount)
    }

    render() {

        const { quizes } = this.props
        // console.log('correct answers',this.state.queCount)
        // console.log('result', this.state.queCount)
        // console.log('dalta last ans', this.state.userAns)
        // console.log(quizes)

        return (
            <div>
                
                <h1>{quizes.category}</h1>
                <h5>{quizes.question}</h5>


<input type="radio"    name={quizes.type} onChange={this.setResult} value={quizes.correct_answer} />{quizes.correct_answer} <br/>
<input type="radio"   name={quizes.type} onChange={this.setResult} value={quizes.incorrect_answers} />{quizes.incorrect_answers[0]} <br/>
               
                   
<input type="radio"   name={quizes.type} onChange={this.setResult} value={quizes.incorrect_answers} />{quizes.incorrect_answers[1]} <br/>
        
<input type="radio"  name={quizes.type} onChange={this.setResult} value={quizes.incorrect_answers} />{quizes.incorrect_answers[2]} <br/>


        
                <button onClick={this.nextQues} >Next</button>
                {/* {
                    quizes.incorrect_answers.map((item) => {
                        return (
                            <div>
                                <input type="radio" name={quizes.type} onChange={this.setResult} value={item} /> {item} <br />
                            </div>

                        );

                    })
                } */}




            </div>
        )
    }
}