import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class EventForceHome extends NavigationMixin(LightningElement) {

    modules = [
        {
            name: 'Events',
            description: 'Manage event schedules and details.',
            icon: 'standard:event',
            target: 'Event__c'
        },
        {
            name: 'Clients',
            description: 'Manage EventForce clients.',
            icon: 'standard:people',
            target: 'Client__c'
        },
        {
            name: 'Vendors',
            description: 'Manage vendors and services.',
            icon: 'standard:product',
            target: 'Vendor__c'
        },
        {
            name: 'Venues',
            description: 'Manage event venues.',
            icon: 'standard:location',
            target: 'Venue__c'
        },
        {
            name: 'Feedback',
            description: 'View client feedback.',
            icon: 'standard:feedback',
            target: 'Feedback__c'
        }
    ];

    openModule(event) {

        const objectApiName =
            event.currentTarget.dataset.target;

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',

            attributes: {
                objectApiName: objectApiName,
                actionName: 'list'
            },

            state: {
                filterName: 'Recent'
            }
        });
    }
}
