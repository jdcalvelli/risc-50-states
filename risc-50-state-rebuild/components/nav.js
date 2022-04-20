import m from 'mithril';

const NavComponent = {
    view: function() {
        return m('div', {class: 'nav'}, [
            m('h3', 'Back to RISC')
        ])
    }
}

export { NavComponent };