import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from '../../components/Profile/ProfileInfo/ProfileStatus/ProfileStatus';

describe('ProfileStatus Component',()=>{
    test('after creation div should be displayed with correct status', ()=>{
        const component = create(<ProfileStatus status = 'Hello world'/>);
        const root = component.root;
        let div = root.findByType('div');
        expect(div).not.toBeNull();
    });
    test('After creation, the input will not be displayed', ()=>{
        const component = create(<ProfileStatus status='Hello world'/>);
        const root = component.root;
        expect(()=>{
            let div = root.findByType('input');
        }).toThrow();
    });
    test('Text in div matches',()=>{
        const component = create(<ProfileStatus status='Hello world'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[1]).toBe('Hello world');
    });
    
});