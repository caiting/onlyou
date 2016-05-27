/**
 * Created by tt on 16/5/25.
 */

var Title = React.createClass({
    getInitialState: function () {
        return {
            class: true
        }
    },
    haddleClick: function (event) {
        this.setState({class: !this.state.class})
    },
    render: function () {
        var text = this.state.class ? 'hide' : 'show';
        return (
            <div className='clearfix'>
                <div className='left'>
                    <h2>实例文档</h2>
                </div>
                <div className='right relative' onClick={this.haddleClick}>
                    <img src="img/head.png" alt=""/>

                    <div className={text}>
                        <ul className='user'>
                            <li><a href="">用户中心</a></li>
                            <li><a href="">退出</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        );
    }
});
ReactDOM.render(
    <Title />,
    document.getElementById('title')
);
var arr = [
    {
        "title": "序言"
    },
    {
        "title": "接口实例",
        "files": ["用户注册", "用户登陆", "省份数据", "城市数据"]
    },
    {
        "title": "数据字典实例",
        "files": ["user", "name", "item"]
    }

];

var Li = React.createClass({
    getInitialState: function () {
        return {
            index: -1
        }
    },
    hideOther: function (index) {
        this.setState({index: index});
    },
    render: function () {
        return (
            <ul className='nav-left'>
                {
                    arr.map(function (val, i) {
                        return (
                            <LiO val={val} opens={(this.state.index==i)} hideOther={this.hideOther} isOpen={!!val.files} index={i}/>
                        )
                    }.bind(this))
                }
            </ul>
        )
    }
});


var LiO = React.createClass({
    getInitialState: function () {
        return {
            class: true
        }
    },
    haddleClick: function (event) {
        this.setState({class: !this.state.class});
        this.props.hideOther(this.props.opens ? -1 : this.props.index);
    },
    render: function () {
        var clas = this.state.class ? 'open' : 'close';
        var val = this.props.val;
        return (
            <li>
                <a onClick={this.haddleClick} href="javascript:;" className={this.props.isOpen?clas:''}>{val.title}</a>
                <Ul list={val.files} open={this.props.opens}/>
            </li>
        )
    }
});

var Ul = React.createClass({
    render: function () {
        var files = this.props.list;
        var list = [];
        if (files instanceof Array) {
            list = files.map(function (name) {
                return <li><a href="javascript:;">{name}</a></li>
            })
        }
        return (
            <ul className={this.props.open?'show':'hide'}>
                {
                    list
                }

            </ul>
        )
    }
});

ReactDOM.render(
    <Li />,
    document.getElementById('main-left')
);

var MainRight =React.createClass({
    getInitialState:function(){
       return{
           username:'',
           lastGistUrl:'',
           way:'',
           date:[],
           parameter:[]
       }
    },
    componentDidMount:function(){
        $.get(this.props.source, function(result) {
            var lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    username: lastGist.depri,
                    lastGistUrl: lastGist.UPL,
                    way:lastGist.way,
                    date:lastGist.date,
                    parameter:lastGist.parameter
                });
            }
        }.bind(this));

    },
    render:function(){
        var repos = this.state.date;
        var parpos = this.state.parameter;

        var repoList = repos.map(function (repo, index) {
            return (
                <tr>
                    <td>{repo.name}</td>
                    <td>{repo.choose}</td>
                    <td>{repo.type}</td>
                    <td>{repo.explain}</td>
                </tr>
            );
        });
        var parList = parpos.map(function (repo, index) {
            return (
                <tr>
                    <td>{repo.name}</td>
                    <td>{repo.type}</td>
                    <td>{repo.explain}</td>
                </tr>
            );
        });

        return(
            <div className='describe'>
                <h3>简要描述：</h3>
                <div>{this.state.username}</div>
                <h3>请求UPL:</h3>
                <div>{this.state.lastGistUrl}</div>
                <h3>请求方式：</h3>
                <div>{this.state.way}</div>
                <h3>参数：</h3>
                <div>
                    <table className='table table-bordered table-hover'>
                        <thead>
                        <tr>
                            <th>参数名</th>
                            <th>必选</th>
                            <th>类型</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        {repoList}
                        </tbody>
                    </table>

                </div>
                <h3>返回参数说明</h3>
                <div>
                    <table className='table table-bordered table-hover'>
                    <thead>
                    <tr>
                        <th>参数名</th>
                        <th>类型</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    {parList}
                    </tbody>
                </table></div>
            </div>

        )
    }
});
ReactDOM.render(
    <MainRight source="package.json" />,
    document.getElementById('main-right')
);