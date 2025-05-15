import { PublicKey } from '@solana/web3.js';

// This is a placeholder - you'll need to update with your actual program ID after deployment
export const PROGRAM_ID = new PublicKey('Va1txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

// Treasury wallet for fees - replace with your actual wallet
export const TREASURY_WALLET = new PublicKey('Va1txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

// Fee settings
export const DEFAULT_FEE_PERCENTAGE = 200; // 2.00% (in basis points)
export const DISCOUNTED_FEE_PERCENTAGE = 150; // 1.50% (in basis points)

// Verification settings
export const VERIFICATION_REQUIRED_AMOUNT = 10 * 1e9; // 10 SOL in lamports

// Escrow status enum
export enum EscrowStatus {
  INITIATED = 0,
  COUNTERPARTY_DEPOSITED = 1,
  COMPLETED = 2,
  CANCELLED = 3,
  PENDING_VERIFICATION = 4,
  DISPUTED = 5,
}

// Verification status enum
export enum UserVerificationStatus {
  UNVERIFIED = 0,
  PENDING = 1,
  APPROVED = 2,
  REJECTED = 3,
}

// Event types
export enum EscrowEvent {
  CREATED = 'escrow_created',
  COUNTERPARTY_DEPOSITED = 'counterparty_deposited',
  COMPLETED = 'escrow_completed',
  CANCELLED = 'escrow_cancelled',
  VERIFICATION_REQUEST = 'verification_requested',
}