'use server';
 
export async function createInvoice(formData: FormData) {
    console.log(111);
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    };
    // Test it out:

    console.log(111,rawFormData);
  }