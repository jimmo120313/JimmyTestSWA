import { Item, Label, Segment } from 'semantic-ui-react';
import { Employee } from '../../../app/models/Employee';

interface Props {
    employees: Employee[];

}

export default function ActivityList({ employees}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {employees.map(employee => (
                    <Item key={employee.id}>
                        <Item.Content>
                            <Item.Header as='a'>{employee.firstName} {employee.lastName}</Item.Header>
                            <Item.Meta>{employee.location}</Item.Meta>
                            <Item.Description>
                                <div>Age: {employee.age}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Label basic content={employee.location} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}