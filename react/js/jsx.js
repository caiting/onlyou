var Jenny = React.createClass({
    haddleCli:function(){
        this.refs.myText.focus();
    },
    render : function(){
        return(
            <div>
                <input type="text" ref='myText'/>
                <input type='button' value='focus thie button' onClick={this.haddleCli} />
            </div>
        )
    }
});
ReactDOM.render(
    <Jenny />,
    document.getElementById('example')
);
var Likebutton = React.createClass({
    getInitialState:function(){
        return {like:false};
    },
    haddle:function(event){
        this.setState({like: !this.state.like});
    },
    render:function(){
        var text = this.state.like?'like':'haven\'t like';
        return(
            <p onClick = {this.haddle}>{text}</p>

        )
    }
})
ReactDOM.render(
    <Likebutton />,
    document.getElementById('main')
)

var Input = React.createClass({
    getInitialState: function(){
        return {value:'hello!'};
    },
    haddle : function(event){
        this.setState({value:event.target.value});
    },
    render : function(){
        var value = this.state.value;
        return(
            <div>
                <input type='text' value={value} onChange={this.haddle}/>
                <p>{value}</p>
            </div>
        )
    }
});
ReactDOM.render(
    <Input />,
    document.getElementById('main')
);

var Hello = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0
        };
    },

    componentDidMount: function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },

    render: function () {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="world"/>,
    document.getElementById('example')
);
var data;

var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return <h1> {this.props.title} </h1>;
    }
});

ReactDOM.render(
    <MyTitle title={data} />,
    document.getElementById('example')
);


