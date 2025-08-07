"use client";
import React from "react";
import { SelectTokenModalProps } from "@/types/modal";
import { ModalProp } from "@/contexts/ModalManagerProvider";
import SendTransactionForm from "../Send/SendTransactionForm";
import BaseModal from "./BaseModal";

export function SendModal({ isOpen, onClose, zIndex }: ModalProp<SelectTokenModalProps>) {
  if (!isOpen) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Send transaction" icon="/modal/coin-icon.gif" zIndex={zIndex}>
      <SendTransactionForm />
    </BaseModal>
  );
}

export default SendModal;
