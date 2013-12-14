describe('Task#1 - myBind', function () {
    var context, func;
    beforeEach(function () {
        context = {name : 'moe'};
        func = function(arg) { return "name: " + (this.name || arg); };
    });

    it('should be defined', function(){
        expect(func.myBind).toBeDefined();
    })

    // delete x to run spec
    it('should be able to bind a function to a context', function(){
        var bound = func.myBind(context)
        expect(bound()).toEqual('name: moe')
    })

    it('should partially apply function in advance', function(){
        var bound, localFunc;
        localFunc = function(salutation, name) { return salutation + ': ' + name; };
        bound = localFunc.myBind(this, 'hello')
        expect(bound('moe')).toEqual('hello: moe')
    })

    it('should completely apply function in advance', function(){
        var bound = func.myBind(this, 'curly')
        expect(bound()).toEqual('name: curly')
    })
})
// delete x to run suite
describe('Task#2 - Person', function () {
    it('shold be defined', function(){
        expect(Person).toBeDefined();
    })

    it('should instantiate object with given properties', function(){
        expect((new Person({a: 1})).a).toEqual(1)
    });

    it('should instantiate object with given properties, take#2', function(){
        var p = new Person({
            name: "Jack",
            age: 10,
            jump: function(){ return "My name is " + this.name + " and I can jump.";}
        });
        expect(p.name).toEqual('Jack'); // "Jack"
        expect(p.age).toEqual(10);
        expect(p.jump()).toEqual("My name is Jack and I can jump.");
    })


});

describe('Task#3 - PersonExtended', function () {
    it('shold be defined', function(){
        expect(PersonExtended).toBeDefined();
    })

    it('should have custom getters and setters for all properites', function(){
        var p = new PersonExtended({
            a: {b: "c"}
        });

        expect(p.getA()).toEqual({b: "c"}) // {b: "c"}
        expect(p.setA.bind(null, 2)).not.toThrow()
        p.setA('anything else')
        expect(p.getA()).toEqual('anything else')
    })


    it('should not have custom getters for functions', function(){
        var a = {
            name: "Jack",
            age: "10",
            jump: function(){return 'jumpy'}
        }
        var p = new PersonExtended(a);

        expect(p.getName()).toEqual('Jack'); // "Jack"
        expect(p.age).toBeUndefined();
        p.setAge(12)
        expect(p.getAge()).toEqual(12);
        // expect(p.jump()).toEqual('jumpy');
        expect(p.getJump).toBeUndefined();
        expect(a.age).toEqual("10")
    })

})
