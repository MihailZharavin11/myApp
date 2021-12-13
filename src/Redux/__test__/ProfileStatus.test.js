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
    test('When you double click on a span, an input appears and value to be Hello World',()=>{
        const component = create(<ProfileStatus status = 'Hello world'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('Hello world');
    });
    test('When you double click on a span, span to be null',()=>{
        const component = create(<ProfileStatus status = 'Hello world'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        expect(()=>{
            let span = root.findByType('span');
        }).toThrow();
    });
    test('Function call',()=>{
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status = 'Hello world' updateUserStatus = {mockCallBack} />);
        const instance = component.getInstance();
        instance.deActivatedEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
    
});