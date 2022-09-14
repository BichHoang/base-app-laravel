import i18n from '../../i18n';
const { t } = i18n.global
import getMessage from './getMessage';

export default {
    required(value: string): string {
        if (!!value) {
            return '';
        }
        
        return getMessage('required');
    },

    email(value: string): string {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
            return getMessage('email');
        }

        return '';
    },

    confirmed(value: string, confirmValue: string): string {
        if (value !== confirmValue) {
            return getMessage('confirmed');
        }

        return '';
    },

    min(value: number, limit: number): string {
        if (value < limit) {
            return getMessage('min', [{key: ':min', value: limit.toString()}, {key: ':type', value: ''}]);
        }

        return '';
    },

    max(value: number, limit: number): string {
        if (value > limit) {
            return getMessage('max', [{key: ':max', value: limit.toString()}, {key: ':type', value: ''}]);
        }

        return '';
    },

    minLength(value: string, limit: string): string {
        if (value.length < Number(limit)) {
            return getMessage('min', [{key: ':min', value: limit}, {key: ':type', value: 'characters'}]);
        }

        return '';
    },

    maxLength(value: string, limit: string): string {
        if (value.length > Number(limit)) {
            return getMessage('max', [{key: ':max', value: limit}, {key: ':type', value: 'characters'}]);
        }

        return '';
    }
}
