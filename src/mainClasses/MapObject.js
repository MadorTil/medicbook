class MapObject{
    constructor(name){
        this.name = name
        this.displayName = name
        this.children = []
        this.index = 100
        this.parent = null
    }

    static displayNameInstance(name, displayName){
        let mapObject = new MapObject(name);
        mapObject.setDisplayName(displayName);
        mapObject.index = 100;
        return mapObject
    }

    static displayNameAndIndexInstance(name, displayName, index){
        let mapObject = new MapObject(name);
        mapObject.setDisplayName(displayName);
        mapObject.index = index
        return mapObject
    }

    setDisplayName(displayName){
        this.displayName = displayName

    }

    addChild(mapObjectChild){
        this.children.push(mapObjectChild);
        mapObjectChild.parent = this;
    }

    getChild(name){
        for (var index in this.children){
            var child = this.children[index]
            if(child.name == name){
                return child;
            }
        }
        return this
    }

    addChildren(children){
        for (let i = 0; i < children.length; i++){
            let child = children[i];
            this.children.push(child)
            child.parent = this;
        }
    }

    sortByIndex(){
        if(this.children == null){
            console.log("Skipping 1...", this.displayName)
            return
        }

        this.children.sort(function (a, b) {
            return a.index - b.index;
        });
        this.children.forEach(function(_child){_child.sortByIndex()});
    }
}

export default MapObject;