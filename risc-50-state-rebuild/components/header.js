import m from 'mithril';

const HeaderComponent = {
    view: function() {
        return m('div', {class: 'header'}, [
            m('h1', 'The National Data Literacy Snapshot'),
            m('h3', 'The Center for RISC researched and graded all 50 States to determine what they have done to promote data science education. How does your state compare? ')
        ])    
    }
}

export { HeaderComponent }