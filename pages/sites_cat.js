(function($) {
    
    var LabelList = React.createClass({
        getInitialState: function() {
            return {
                labels: simpleClone($J.categories)
            };
        },
        handleClick: function(i, app, e) {
            e.preventDefault();
            var nextSelected = this.state.labels[i].name;
            app.setState({
                selected: nextSelected
            });
            window.history.replaceState({}, '', $J.baseUrl + nextSelected);
        },
        render: function() {
            var list = this,
                selected = this.props.selected,
                createLabel = function(label, i) {
                    var classStr = 'post-label',
                        count = label.value;
                    if (label.name === selected) {
                        classStr += ' select';
                    }
                    if (count > 50000 || count === 1) {
                        count = '';
                    }
                    return (
                        <span onClick={list.handleClick.bind(list, i, list.props.app)} className={classStr} key={i}>
                            {label.name} <sup>{count}</sup>
                        </span>
                    );
                };

            return (
                <section className="label-section">
                    <h2>分类列表</h2>
                    <hr/>
                    <div>{this.state.labels.map(createLabel)}</div>
                </section>
            );
        }
    });


    var CommentList = React.createClass({
      render: function() {
        return (
            <li class="module-list-item"><a href="http://blog.codingnow.com/aee/" title="">读书</a> (26)</li>
        );
      }
    });

    var CommentBox = React.createClass({
      render: function() {
        return (
            <ul class="module-list">
                <CommentList />
            </ul>
        );
      }
    });

    React.render(<CommentBox />, document.getElementById('module-content'));

}(jQuery));