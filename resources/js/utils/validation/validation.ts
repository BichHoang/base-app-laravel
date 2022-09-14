import checkRules from './checkRules';

const validate = (rules: string[], data: any) => {
    let errors: string[] = [];
    rules.forEach(rule => {
        let error = check(rule, data);
        if (!!error) {
            errors.push(error);
        }
    });
    return errors;
}

function getFieldRules(value: string): string[] {
    return value.split("|");
}

function check(rule: string, data: any): string {
    const [r, param] = rule.split(':');
    switch (r) {
        case 'required':
            return checkRules.required(data);
        case 'email':
            return checkRules.email(data);
        case 'confirmed':
            return checkRules.confirmed(data.value, data.confirmValue);
        case 'min':
            return checkRules.min(data, Number(param));
        case 'max':
            return checkRules.max(data, Number(param));
        case 'minLength':
            return checkRules.minLength(data, param);
        case 'maxLength':
            return checkRules.maxLength(data, param);
        default:
            return '';
    }
}

export default {
    oneField(rules: string, data: any) {

        return validate(getFieldRules(rules), data)
    },

    allFields(rules: any, fields: any) {
        let errors;
        for (let field in rules) {
            let error = validate(getFieldRules(rules[field]), fields[field])
            if (error.length) {
                errors = {
                    [field]: error
                };
            }
        }

        return errors;
    },
}
