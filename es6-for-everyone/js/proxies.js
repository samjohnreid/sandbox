const person = {
    name: 'Sam',
    age: 45
};

const personProxy = new Proxy(person, {

    get(target, name) {
        console.log('someone is asking for ', target, name);
        return target[name].toUpperCase();
    },

    set(target, name, value) {
        if(typeof value === 'string') {
            target[name] = value.trim().toUpperCase() + '✂';
        }
    }

});

personProxy.name = 'Samuel';

// **************************************************

const phoneHandler = {

    set(target, name, value) {
        target[name] = value.match(/[0-9]/g).join('');
    },

    get(target, name) {
        return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }

}

const phoneNumbers = new Proxy(phoneHandler, {});

phoneNumbers.home = '+234 -234-2343';
phoneNumbers.work = '(234)  234 2343';

// **************************************************

const safeHandler = {

    set(target, name, value) {
        const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase());

        if (!(name in target) && likeKey) {
            throw new Error(`Oops! Looks like like we already have a(n) ${name} property but with the case of ${likeKey}.`);
        }

        target[name] = value;
    }

}

const safety = new Proxy({id: 100}, safeHandler);

safety.superHero = 'Batman';

safety.superhero = 'Superman';






















