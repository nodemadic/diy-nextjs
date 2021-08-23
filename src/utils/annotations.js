export function objectId(id) {
    if (process.env.NEXT_ENV === 'production') {
        return {};
    }
    return {
        'data-sb-object-id': id
    };
}

export const oid = objectId;

function fieldPathToString(path) {
    const prefix = path.objectId ? `${path.objectId}:` : '';
    const suffix = path.xpathLocation ? `#${path.xpathLocation}` : '';
    return `${prefix}${path.fieldName}${suffix}`;
}

export function fieldPath(...paths) {
    if (process.env.NEXT_ENV === 'production') {
        return {};
    }
    return {
        'data-sb-field-path': paths.map((p) => (typeof p === 'string' ? p : fieldPathToString(p))).join(' ')
    };
}

export const fpath = fieldPath;
