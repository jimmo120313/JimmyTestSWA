import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label, Segment } from 'semantic-ui-react';
import { Employee } from '../../../app/models/Employee';

interface Props {
    employee: Employee
}

export default function EmployeeListItem({ employee }: Props) {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Content>
                                <Item.Description>
                                    <Label basic color='green'>
                                    First Name:{employee.firstName}
                                    </Label>
                                </Item.Description>
                                <Item.Description>
                                    <Label basic color='blue'>
                                    Last Name:{employee.lastName}
                                    </Label>
                                </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
        </Segment.Group>
    )
}