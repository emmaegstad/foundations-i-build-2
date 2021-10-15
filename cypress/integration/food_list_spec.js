import { food } from '../../food.js';

describe('Build #2 Tests', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains a ul with id #food-list', ()=>{
            cy.get('ul#food-list').should('be.visible');
        });
    
        it('contains an <li> for each item in food.js', ()=>{
            cy.get('ul#food-list').find('li.food-item').should('have.length', food.length);
        });

        it('contains a span and an image for each food item', ()=>{
            cy.get('ul#food-list').find('li.food-item').each(($el)=>{
                expect($el.find('span')).to.exist;
                expect($el.find('img')).to.exist;
            });
        });
    });
});