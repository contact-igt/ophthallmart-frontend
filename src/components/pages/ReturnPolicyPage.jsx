import React, { useEffect } from 'react';

const ReturnPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 animate-in fade-in duration-700 min-h-[60vh]">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B2C4D] mb-10 border-b-4 border-[#EA580C] pb-6">
                Return Policy
            </h1>

            <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
                <section>
                    <p className="text-lg">
                        In our constant endeavor to offer excellent services and 100% ensure customer satisfaction, we have introduced a return policy of up to <strong>07 days</strong>. You can opt for a refund or exchange within 07 days of product purchase.
                    </p>
                    <p>
                        However, please ensure that the item is <strong>unused and in the same condition as received</strong>. Also, it has to be in its original packaging.
                    </p>
                </section>

                <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] mb-4">The Process of Returns</h2>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Please log on to your account.</li>
                        <li>Click on the <strong>Order History</strong> tab.</li>
                        <li>Go to <strong>Order Details</strong> with your order reference.</li>
                        <li>Go to the <strong>Return Section</strong> and place your return product details & send your return request.</li>
                    </ol>
                    <p className="mt-4 text-sm italic">
                        Return shipping charges have to be borne by the customer. Ophthallmart does not have a pickup policy at this point in time, hence it is upon the customer to send the parcel unused and packed in original packaging within 07 days of purchase. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] mb-4">Shipping and Insurance</h2>
                    <p>
                        If you are shipping an item for returns you should prefer using a trackable shipping service or purchasing shipping insurance to ensure that your product reaches us safely.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-[#EA580C] p-4 my-4">
                        <p className="font-bold text-[#0B2C4D]">Items exempted from returns:</p>
                        <p>Ophthalmic Equipment's, Liquid items and gift cards or health vouchers are exempted from being returned. Products purchased in sale amount cannot be refunded. Products sold under discount, 1+1 offer, or free items cannot be taken back.</p>
                    </div>
                    <p className="font-semibold text-slate-800">
                        So, please place your order carefully and only when you are certain that you want that particular product. Read our specifications carefully to avoid confusions and wrong order placements.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] mb-4">Rules of Refund</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To complete your return, we require a receipt or proof of purchase.</li>
                        <li>Please do not send your purchase back to the manufacturer.</li>
                        <li>Please share your return shipping details once the return is initiated.</li>
                        <li>There are certain situations where only partial refunds are granted.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] mb-4">Eligibility for Refund</h2>
                    <p>Once your return is received, it will be inspected for the following conditions:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Right product</li>
                        <li>Unused condition</li>
                        <li>Intact seal</li>
                        <li>No Damages</li>
                    </ul>
                    <p className="mt-4">
                        Once your product reaches us, we will send a prompt email to notify you that your return has been received. After the inspection of the returned product, we will notify you of the approval or rejection of your refund.
                    </p>
                    <p>
                        If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a few days as per the bank's policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] mb-4">I have not received my refund. What shall I do?</h2>
                    <p>
                        Usually, the refund process is seamless and the amount gets credited without any iterations. However, if you haven't received a refund even after 10 days of approval, then we advise you to first check with your bank or credit card Company as it might be stuck there.
                    </p>
                    <p className="mt-2">
                        If the bank or credit card company gives a no error report then please contact us at <a href="mailto:sales@ophthallmart.com" className="text-[#EA580C] hover:underline">sales@ophthallmart.com</a> immediately.
                    </p>
                </section>

                <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] mb-4">Refusal Rights</h2>
                    <p>If the following conditions are not met, we reserve the right to refuse your package and /or refund:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Please include this return reference on your return package</li>
                        <li>All products must be returned in their original package condition, unused & without damage.</li>
                        <li>Please printout this document and slip it into your package.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] mb-4">How can I apply for an exchange?</h2>
                    <p>
                        Your item will be eligible for exchange only if the product received is defective or damaged. Though the products are checked multiple times before packaging and parceling, however in case of rare unfortunate scenario it might get damaged on the way.
                    </p>
                    <p className="mt-2">
                        In such cases, we act promptly to help you exchange it for the same item. Please send us an email at <a href="mailto:info@ophthallmart.com" className="text-[#EA580C] hover:underline">info@ophthallmart.com</a>.
                    </p>
                </section>

                <div className="mt-12 p-6 bg-[#0B2C4D] text-white rounded-xl shadow-lg">
                    <p className="text-center font-bold text-lg uppercase tracking-wider">
                        NOTE: NO REFUND WILL BE MADE TO CUSTOMER ONCE THE PRODUCT HAS BEEN RECEIVED BY CUSTOMER IN WHATSOEVER CIRCUMSTANCES
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReturnPolicyPage;
