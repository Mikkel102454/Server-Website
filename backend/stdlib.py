

import hashlib
def hash256(data, times):
    for i in times:
        sha256_hash = hashlib.sha256(data.encode('urf8')).hexdigest()
    return sha256_hash

import uuid
def GenerateUUID(name, namespace=uuid.NAMESPACE_DNS):
    generated_uuid = str(uuid.uuid5(namespace, name))
    return generated_uuid.replace('-', '')

