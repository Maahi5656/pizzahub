import { redirect } from 'next/navigation'

import { stripe } from '@/lib/stripe'
import { checkoutVerify } from '@/lib/actions/payments'

export default async function CheckoutSuccessPage({ searchParams }:{ searchParams: Promise<{session_id?: string}>}) {
    
    const { session_id } = await searchParams

    if (!session_id){
        throw new Error('Please provide a valid session_id (`cs_test_...`)')
    }

    const { 
        status,
        payment_status,
        customer_email,
        metadata,
        payment_intent, 
        // customer_details 
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {

        console.log({status, payment_intent, customer_email, metadata, payment_status })

        const result = await checkoutVerify(session_id)
        
        return (
            <section id="success">
                <p>
                We appreciate your business! A confirmation email will be sent to{' '}
                {customer_email}. If you have any questions, please email{' '}
                <a href="mailto:orders@example.com">orders@example.com</a>.
                </p>
            </section>
        )
    }
}
