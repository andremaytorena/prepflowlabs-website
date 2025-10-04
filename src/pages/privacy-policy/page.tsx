/** @format */

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function TermsAndConditions() {
  return (
    <div className="w-screen">
      <Header />

      <div className="flex flex-col items-center justify-center pt-8">
        <div className="w-full px-5 text-left sm:max-w-4xl sm:px-0">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <div className="pt-10">
            <h3 className="text-lg font-semibold">1. Introduction</h3>
            <p className="">
              Your privacy is important to us. This Privacy Policy describes how
              Urva Developments LLC (“we,” “us,” or “our”) collects, uses,
              discloses, and protects information in connection with our FBM
              Management Integration for prep-center dashboards.
            </p>
          </div>
          <div className="pt-5">
            <h3 className="text-lg font-semibold">2. Information We Collect</h3>
            <ul className="list-disc pl-10">
              <li>
                Order Identifiers: We receive and store only unique order IDs
                (e.g. Amazon Order IDs) to track fulfillment status.
              </li>
              <li>
                Shipping Label Files: We generate and retain shipping label
                documents (PDFs, images) needed for carrier processing.
              </li>
              <li>
                System Metadata: Timestamps, process logs, and status codes,
                solely to support system functionality and troubleshooting.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h3 className="text-lg font-semibold">
              3. Information We Do Not Collect or Store
            </h3>
            <ul className="list-disc pl-10">
              <li>
                Personal Seller Data: We never collect or retain any Amazon
                seller personal information, including names, addresses, email
                addresses, phone numbers, tax IDs, banking details, or any other
                personally identifiable information (PII) associated with seller
                accounts.
              </li>
              <li>
                Customer PII Beyond What's on Labels: Except for the minimal
                recipient shipping details embedded in label files (required by
                carriers), we do not retain customer PII in our databases.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h3 className="text-lg font-semibold">4. How We Use Your Data</h3>
            <ul className="list-disc pl-10">
              <li>
                Order Processing: Order IDs are used to retrieve order details
                at runtime via Amazon's Selling Partner API; we do not store
                full order data.
              </li>
              <li>
                Label Generation: Shipping label files are created, stored
                temporarily for printing, and archived to support audit trails
                and reprints.
              </li>
              <li>
                System Operations & Analytics: Metadata and log data help us
                monitor system health, performance metrics, and to diagnose
                issues.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h3 className="text-lg font-semibold">
              5. Data Storage & Security
            </h3>
            <ul className="list-disc pl-10">
              <li>
                Encrypted Storage: All stored data—order IDs, label files, and
                logs—are encrypted at rest using AES-256.
              </li>
              <li>
                Access Controls: Role-based permissions ensure only authorized
                personnel and system processes can access stored files and
                identifiers.
              </li>
              <li>
                Network Protections: Databases and file stores reside behind
                firewalls and within private network segments; access is
                restricted to our application servers.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h3 className="text-lg font-semibold">6. Data Retention</h3>
            <ul className="list-disc pl-10">
              <li>
                Order IDs & Labels: Retained for a configurable period (default:
                365 days) to support reprints, audits, and compliance. After
                expiration, data is securely purged.
              </li>
              <li>
                Logs & Metadata: Retained for troubleshooting and performance
                analysis for up to 90 days, then automatically deleted.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h3 className="text-lg font-semibold">7. Data Sharing</h3>
            <p>
              We do not share your stored order IDs or label files with any
              third parties except:
            </p>
            <ul className="list-disc pl-10">
              <li>
                We do not share your stored order IDs or label files with any
                third parties except:
              </li>
              <li>
                Service Providers: We use trusted subprocessors (e.g. cloud
                hosting) under strict confidentiality and security agreements.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h3 className="text-lg font-semibold">8. Your Rights</h3>
            <ul className="list-disc pl-10">
              <li>
                Access & Correction: You may request a copy of your stored order
                IDs and label archives.
              </li>
              <li>
                Deletion: You can request early deletion of order data and label
                files; we will comply within 30 days, unless retention is
                legally required.
              </li>
              <li>
                Questions & Complaints: Contact us anytime at
                support@prepflowlabs.com.
              </li>
            </ul>
          </div>
          <div className="items-left justify-start pb-20 text-left">
            <p className="pt-5">
              For any questions or further clarification, please contact
              support@prepflowlabs.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
