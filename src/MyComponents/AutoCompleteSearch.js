import React, { Component, Fragment} from 'react';
import "./Style.css";


export class AutoCompleteSearch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         activeSuggestion : 0,
         filteredSuggestions: [],
         showSuggestions: false,
         userInput:"",
      };
    }
    onChange = e =>{
        const{suggestions} = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(suggestion=>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase())>-1)

            this.setState({
                activeSuggestion: 0,
                showSuggestions: true,
                filteredSuggestions,
                userInput : e.currentTarget.value,
            }

            )
    }
    onClick = e=>{
        this.setState({
            activeSuggestion:0,
            showSuggestions : false,
            filteredSuggestions:[],
            userInput : e.currentTarget.innertext,
        })
    }
    onKeyDown =e =>{
        const{activeSuggestion , filteredSuggestions} =this.state;
        
        if(e.keyCode===13){
            this.setState({
             activeSuggestion : 0,
             showSuggestions: false,
             userInput : filteredSuggestions[activeSuggestion]
            });
        }
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
              return;
            }
            this.setState({ activeSuggestion: activeSuggestion - 1 });
          }
          else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
              return;
            }
            this.setState({ activeSuggestion: activeSuggestion + 1 });
          }
        
    }
    
  render() {
    const {
        onChange,
        onClick,
        onKeyDown,
        state: {
          activeSuggestion,
          filteredSuggestions,
          showSuggestions,
          userInput
        }
      } = this;
      let suggestionsListComponent;
      if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
          suggestionsListComponent = (
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;
  
                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }
                return (
                  <li className={className} key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          suggestionsListComponent = (
            <div class="no-suggestions">
              <em>No suggestions available.</em>
            </div>
          );
        }
      }


    return (

        <Fragment>
    <div>
    <input type='text' className='searchitem' placeholder="search for restaurant or a dish"
    onChange={onChange}
    onKeyDown={onKeyDown}
    onClick={onClick}
    value ={userInput}/>
    {suggestionsListComponent}

    </div>
    </Fragment>
    )
  }
}

export default AutoCompleteSearch;
