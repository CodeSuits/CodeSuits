(function($) {
    var i, tags = {};
    for (i = 0; i < $J.categories.length; i++) {
        var t = tags[$J.categories[i]];
        tags[$J.categories[i]] = t ? t+1 : 1;
    }
     $J.categories = [];
    for (var tag in tags) {
        $J.categories.push({
            name: tag,
            value: tags[tag]
        });
    }
    $J.categories.sort(function(a, b){
        return b.value - a.value;
    });
    function simpleClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    var LabelList = React.createClass({
        getInitialState: function() {
            return {
                labels: simpleClone($J.categories)
            };
        },
        render: function() {
            var list = this,
            createLabel = function(label, i) {
                var count = label.value;
                return (
                    <li class="module-list-item"><a href="dd" title="">{label.name}</a> ({count})</li>
                );
            };

            return (
                <ul class="module-list">{this.state.labels.map(createLabel)}</ul>
            );
        }
    });

    var CommentBox = React.createClass({
      render: function() {
        return (
            <LabelList/>
        );
      }
    });
    React.render(<CommentBox/>, document.getElementById('module-content'));

}(jQuery));