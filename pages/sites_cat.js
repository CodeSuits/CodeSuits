(function($) {
    var i, tags = {};
    for (i = 0; i < $J.categories.length; i++) {
        var cats = $J.categories[i];
        var catArry = cats.split("-");
        //第一大分类
        tags[catArry[0]] = tags[catArry[0]] ? tags[catArry[0]] : {};
        tags[catArry[0]].count = tags[catArry[0]].count ? tags[catArry[0]].count + 1 : 1;
        
        //第二小分类
        if (catArry.length >1)
        {
            tags[catArry[0]][catArry[1]] = tags[catArry[0]][catArry[1]] ? tags[catArry[0]][catArry[1]] : {};
            tags[catArry[0]][catArry[1]].count = tags[catArry[0]][catArry[1]].count ? tags[catArry[0]][catArry[1]].count+1 : 1;
        }
    }
    $J.categories = [];
    for (var tag in tags) {
        var catArry = [];
        var cats = tags[tag];
        for(var cat in cats)
        {
            if (cat != "count")
            {
                catArry.push({
                    pname: tag,
                    name: cat,
                    count: cats[cat].count
                });
            }
        }
        $J.categories.push({
            name: tag,
            count: tags[tag].count,
            map:catArry
        });
    }
    function simpleClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    var ListItemWrapper = React.createClass({
      render: function() {
        var urlname = this.props.data.pname ? this.props.data.pname+"-"+this.props.data.name : this.props.data.name;
        var url = $J.baseUrl + urlname;
        return (
            <li class="module-list-item"><a href={url} title={urlname}>{this.props.data.name}</a> ({this.props.data.count})</li>
        );
      }
    });
    var LabelList = React.createClass({
        getInitialState: function() {
            return {
                labels: simpleClone($J.categories)
            };
        },
        render: function() {
            createLabel = function(label, i) {
                var mapLabels = label.map;
                var url = $J.baseUrl + label.name;
                if(mapLabels.length>0)
                {
                    return (
                        <li class="module-list-item"><a href={url} title={label.name}>{label.name}</a> ({label.count})
                            <ul class="module-list">
                                {mapLabels.map(function(result){
                                    return <ListItemWrapper data={result}/>;
                                })}
                            </ul>
                        </li>
                    );  
                }
                else
                {
                    return (
                        <ListItemWrapper data={label}/>
                    );  
                }
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